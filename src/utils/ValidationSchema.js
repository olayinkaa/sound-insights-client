import * as yup from 'yup'

export const Mp3Schema = yup.object({
    artistName:yup.string().required("Artist name is required").min(2),
    songGenre:yup.string().required("Genre name is required").min(2),
    downloadable:yup.string().required("select download status"),
    songName:yup.mixed().required('No music file selected'),
    songThumbnail:yup.mixed().required('No image is selected')
});

export const AboutSchema = yup.object({
    title:yup.string().required("Title is required").min(2),
    description:yup.string().required("Description is required").min(2),
});

export const EmailSchema = yup.object({
    subject:yup.string().required("message subject is required").min(5),
    email:yup.string().required("email is required").email(),
    body:yup.string().required("message body is required").min(10).max(255,"The body message cannot be more than 255 characters"),
});


