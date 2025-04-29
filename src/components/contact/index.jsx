import React from 'react'

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to reach out!</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact
