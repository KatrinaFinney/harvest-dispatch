import { Sequelize, DataTypes } from 'sequelize';
console.log(process.env.DATABASE_URL); // Add this to check if the DATABASE_URL is defined

// Create Sequelize instance and connect to PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Needed for Heroku SSL connection
    },
  },
});

// Define the FormData model
const FormData = sequelize.define('FormData', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  licenseType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  licenseNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stateOfIssuance: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  licenseExpirationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  previousEmployer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  truckMakeModel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  licensePlateNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dotMedicalCard: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  consentForDrugAlcoholScreening: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  consentForBackgroundCheck: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  preferredFreightType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  availability: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
});

// Define the POST handler for form submission
export async function POST(req) {
  try {
    const formData = await req.json();

    // Save form data to PostgreSQL
    const newFormData = await FormData.create(formData);

    return new Response(
      JSON.stringify({
        message: 'Form data saved successfully!',
        data: newFormData,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving form data:', error);
    return new Response(
      JSON.stringify({
        message: 'Error saving form data',
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
