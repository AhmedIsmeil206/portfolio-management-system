import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PortfolioCreationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      riskLevel: 'Moderate'
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      riskLevel: Yup.string().required('Required')
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-6 bg-white shadow rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Portfolio Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={`mt-1 p-2 w-full border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          className={`mt-1 p-2 w-full border ${formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="text-red-500 text-sm">{formik.errors.description}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="riskLevel" className="block text-gray-700">Risk Level</label>
        <select
          id="riskLevel"
          name="riskLevel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.riskLevel}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        >
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
        </select>
      </div>

      <button type="submit" className="w-full py-2 px-4 bg-green-600 text-white rounded-md shadow hover:bg-green-500">
        Create Portfolio
      </button>
    </form>
  );
};

export default PortfolioCreationForm;
