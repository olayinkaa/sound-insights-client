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


export const RegisterSchema = yup.object({
    name:yup.string().required("name is required").min(2),
    email:yup.string().required().email(),
    password:yup.string().required("password is required"),
    password_confirmation:yup.string().required("confirm password is required").when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then:yup.string().oneOf(
          [yup.ref("password")],
          "Both password need to be the same"
        )
      })
});

export const LoginSchema = yup.object({
    email:yup.string().required().email(),
    password:yup.string().required("password is required"),
});
