import React, { useState } from "react";


const FORM_ENDPOINT = "https://public.herotofu.com/v1/de9d2a20-5d42-11ed-b82c-5d75eaa7ccff"; // TODO - fill on the later step


const ContactForm = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {

    setTimeout(() => {

      setSubmitted(true);

    }, 100);

  };


  if (submitted) {

    return (

      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );

  }


  return (

    <div className="container">
        <div className="row mx-0 justify-content-center">
            <div className="col-md-7 col-lg-5 px-lg-2 col-xl-7 px-xl-0 px-xxl-3">
            <form
                method="POST"
                className="w-100 rounded-1 p-4 border bg-white"
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
            >
            <label className="d-block mb-4">
                <span className="form-label d-block">Name</span>
                <input
                name="name"
                type="text"
                className="form-control"
                placeholder="John Smith"
                target="_blank"
                rel="noopener noreferrer"
                required
                />
            </label>
                <label className="d-block mb-4">
                    <span className="form-label d-block">Email address</span>
                    <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="joe.bloggs@example.com"
                    required
                    />
                </label>

                <label className="d-block mb-4">
                <span className="form-label d-block">Phone number</span>
                <input
                    name="phone"
                    type="text"
                    className="form-control"
                    placeholder="1-(000)-000-0000"
                    required
                />
                </label>

                <label className="d-block mb-4">
                <span className="form-label d-block">Message</span>
                <textarea
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Any details?"
                ></textarea>
                </label>

                <div className="mb-3">
                <button type="submit" className="btn btn-primary px-3 rounded-3">
                    Send
                </button>
                </div>

            </form>
            </div>
        </div>
    </div>


  );

};


export default ContactForm;