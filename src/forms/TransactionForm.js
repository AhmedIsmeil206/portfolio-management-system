import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TransactionForm = () => {
  const formik = useFormik({
    initialValues: {
      type: 'Buy',
      amount: '',
      portfolio: ''
    },
    validationSchema: Yup.object({
      type: Yup.string().required('Required'),
      amount: Yup.number().required('Required').min(1, 'Amount must be greater than 0'),
      portfolio: Yup.string().required('Required')
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-6 bg-white shadow rounded-lg">
      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700">Transaction Type</label>
        <select
          id="type"
          name="type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.type}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        >
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
          <option value="Transfer">Transfer</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.amount}
          className={`mt-1 p-2 w-full border ${formik.touched.amount && formik.errors.amount ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {formik.touched.amount && formik.errors.amount ? (
          <div className="text-red-500 text-sm">{formik.errors.amount}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="portfolio" className="block text-gray-700">Portfolio</label>
        <input
          id="portfolio"
          name="portfolio"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.portfolio}
          className={`mt-1 p-2 w-full border ${formik.touched.portfolio && formik.errors.portfolio ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {formik.touched.portfolio && formik.errors.portfolio ? (
          <div className="text-red-500 text-sm">{formik.errors.portfolio}</div>
        ) : null}
      </div>

      <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow hover:bg-blue-500">
        Submit Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
