import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UserRegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required')
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-6 bg-white shadow rounded-lg">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          className={`mt-1 p-2 w-full border ${formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="text-red-500 text-sm">{formik.errors.username}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`mt-1 p-2 w-full border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={`mt-1 p-2 w-full border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-500">
        Register
      </button>
    </form>
  );
};

export default UserRegistrationForm;
