import React from 'react'
import {
    Formik,
    Form,
    Field,
} from 'formik';
import { axiosInstance } from '../../../network/axiosInstance';
import * as Yup from 'yup';

interface Values {
    name: string;
    unitPrice: number;
    unitsInStock: number;
    quantityPerUnit: string;
}

const addProductValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    unitPrice: Yup.number().required('Unit Price is required'),
    unitsInStock: Yup.number().required('Units In Stock is required'),
    quantityPerUnit: Yup.string().required('Quantity Per Unit is required')
});

function AddProduct2() {

    const initialValues = {
        name: '',
        unitPrice: 0,
        unitsInStock: 0,
        quantityPerUnit: ''
    }

    //name, unitPrice, unitsInStock, quantityPerUnit
    return (<>
        <h1>Add Product</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={(values, formikHelpers) => {

                axiosInstance.post('/products', values)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }}
            validationSchema={addProductValidationSchema}
        >

            {({ errors, touched }) => (
                <Form>
                    {
                        errors.name && touched.name && (
                            <div style={{ color:'tomato' }}>{errors.name}</div>
                        )
                    }
                    {
                        errors.unitPrice && touched.unitPrice && (
                            <div style={{ color:'tomato' }}>{errors.unitPrice}</div>
                        )
                    }
                    {
                        errors.unitsInStock && touched.unitsInStock && (
                            <div style={{ color:'tomato' }}>{errors.unitsInStock}</div>
                        )
                    }
                    {
                        errors.quantityPerUnit && touched.quantityPerUnit && (
                            <div style={{ color:'tomato' }}>{errors.quantityPerUnit}</div>
                        )
                    }
                    <div>
                        <label htmlFor="">Name</label>
                        <Field name="name" type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Unit Price</label>
                        <Field name="unitPrice" type="number" />
                    </div>
                    <div>
                        <label htmlFor="">Units In Stock</label>
                        <Field name="unitsInStock" type="number" />
                    </div>
                    <div>
                        <label htmlFor="">Quantity Per Unit</label>
                        <Field name="quantityPerUnit" type="text" />
                    </div>
                    <div>
                        <button type="submit">Add Product</button>
                    </div>
                </Form>
            )}

        </Formik>
    </>
    )
}

export default AddProduct2