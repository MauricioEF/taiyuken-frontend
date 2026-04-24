"use client"
import { ChangeEvent, SubmitEvent, useState } from "react";
import './Form.types'
import { ContactFormConstants, ValidationEmail } from './ContactFormConstants'
import { Fields } from "./Form.types";
import { BsPersonFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";

const ContactForm = () => {

    const [fields, setFields] = useState<Fields>({
        name: '',
        email: '',
        description: '',
        contactReason: ''
    });

    const [error, setError] = useState('');


    const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement> | ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (fields.name.trimStart() === '' || fields.email.trimStart() === '' || !ValidationEmail.test(fields.email) || fields.description.trimStart() === '' || fields.contactReason === '') {
            setError('Todos los campos son obligatorios');
            return
        }

        setError('');
        console.log(fields);
    }

    //TODO: Prevent background color to change when autofilling
    return (
        <>
            <form className="flex flex-row pb-10" onSubmit={handleSubmit}>

                <div className="w-full pl-10">
                    <img className="w-11/12 h-12/12 mx-4 rounded-3xl" src={'https://imagedelivery.net/TFdlNS3TWs8qiYkkJ6HFzg/d53dc874-f2dd-4db1-78e7-79f750c5f500/public'} />
                </div>

                <div className="flex flex-col justify-center bg-bg w-full h-200 gap-5">
                    <div className="flex flex-col justify-center ">
                        <h1 className="text-text text-5xl">Let's Create <span className="text-cyan-600">Together</span></h1>
                        <p className="mt-5 text-text-muted">Have a game concept or design project in mind? We'd love to hear from you.</p>
                        <p className="text-text-muted">Tell us about your vision and let's bring it to life.</p>
                    </div>


                    <div className="flex flex-row gap-5">
                        <p className="text-text-muted">Name *</p>
                        {error && fields.name.trimStart() ? '' : <p className="text-red-400">{error}</p>}
                    </div>

                    <div className="flex flex-row bg-bg-subtle rounded-2xl h-24 w-3xl gap-2">
                        <BsPersonFill className="absolute ml-5 mt-9 text-text-muted text-xl" />
                        <input className="flex absolute pl-15 pb-3 mr-10 h-24 w-3xl focus:bg-bg-subtle focus:rounded-2xl focus:h-20 focus:w-3xl focus:pl-15 focus:pt-2" name="name" value={fields.name} onChange={handleChange} placeholder={'Your full name'} />
                    </div>

                    <div className="flex flex-row gap-5">
                        <p className="text-text-muted">Email *</p>
                        {error && fields.email.trimStart() ? '' : <p className="text-red-400">{error}</p>}
                    </div>

                    <div className="flex flex-row bg-bg-subtle rounded-2xl h-24 w-3xl gap-2">
                        <MdMailOutline className="absolute ml-5 mt-9 text-text-muted text-xl" />
                        <input type="email" className="flex absolute pl-15 pb-3 mr-10 h-24 w-3xl focus:bg-bg-subtle focus:rounded-2xl focus:h-20 focus:w-3xl focus:pl-15 focus:pt-2" name="email" value={fields.email} onChange={handleChange} placeholder="your.email@example.com" />
                    </div>


                    <div className="flex flex-row gap-5">
                        <p className="text-text-muted">Contact Reason *</p>
                        {error && fields.contactReason ? '' : <p className="text-red-400">{error}</p>}
                    </div>

                    <div>
                        <select name="contactReason" value={fields.contactReason} onChange={handleChange}>
                            <option className="bg-bg-subtle text-text-subtle" value={''}>- - Seleccione un Valor - -</option>
                            {ContactFormConstants.map((formConst) => {
                                return <option className="bg-bg-subtle text-text-subtle" key={formConst.name}>{formConst.name}</option>
                            })}
                        </select>
                    </div>

                    <div className="flex flex-row gap-5">
                        <p className="text-text-muted">Project Description *</p>
                        {error && fields.description.trimStart() ? '' : <p className="text-red-400">{error}</p>}
                    </div>


                    <textarea className="bg-bg-subtle rounded-2xl h-1/4 w-3xl pl-5 pt-5 resize-none" name="description" value={fields.description} onChange={handleChange} placeholder="Tell us about your game or desing project..." />

                    <input className="bg-blue-600 text-text rounded-2xl h-14 w-3xl hover:bg-blue-700 cursor-pointer" type="submit" placeholder="Send Message " />
                </div>

            </form>
        </>
    )
}

export default ContactForm;