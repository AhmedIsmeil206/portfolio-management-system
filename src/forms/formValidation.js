import * as Yup from 'yup';

export const registrationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
});

export const portfolioSchema = Yup.object({
  name: Yup.string().required('Portfolio name is required'),
  description: Yup.string().required('Description is required'),
  riskLevel: Yup.string().required('Risk level is required')
});

export const transactionSchema = Yup.object({
  type: Yup.string().required('Transaction type is required'),
  amount: Yup.number().min(1, 'Amount must be greater than 0').required('Amount is required'),
  portfolio: Yup.string().required('Portfolio is required')
});
