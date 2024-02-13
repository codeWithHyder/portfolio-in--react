import { yupToFormErrors } from 'formik';
import * as Yup from 'yup';

export const messageSchema = Yup.object({
    name: Yup.string().min(3).required('required'),
    email: Yup.string().email("email not valid").required('required'),
    message: Yup.string().min(12).required('required')
})