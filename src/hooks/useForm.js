import { useState, useEffect } from 'react';
import validate from '../validation/schema';

export default function useForm(callback, schema) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          callback();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

    const handleSubmit = async e => {
        e.preventDefault();

        setErrors(await validate(values, schema));           
        setSubmitting(true);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })        
    } 

    return {
        values,
        errors,
        handleSubmit,
        handleChange
    }
}