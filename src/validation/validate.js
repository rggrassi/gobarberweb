export default async function validate(values, schema) {
    try {
        await schema.validate(values, { abortEarly: false });
        return {};
    } catch(err) {
        const errors = err.inner.reduce((result, error) => {
            result[error.path] = error.message
            return result;
        }, {})
        return errors;            
    }    
}