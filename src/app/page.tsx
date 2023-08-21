"use client"

import { useState } from "react"

export default function Home() {
  const [mail, setMail] = useState({ subject: "", message: "" })

  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")

  const sendEmail = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mail)
      })
      const data = await res.json()
      if (data.code !== 200) {
        setMsg("No se logró enviar el correo, vuelve a intentarlo.")
      } else {
        setMsg("Correo enviado exitosamente")
      }
    } catch (error) {
      console.log(error);
      setMsg("Ocurrio un error inesperado, vuelve a intentarlo más tarde.")
    }
    setLoading(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="mb-6">
          <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject *</label>
          <input
            onChange={(e) => setMail({ ...mail, subject: e.target.value })}
            value={mail.subject}
            type="text"
            id="large-input"
            required
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>


        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message *</label>
          <textarea
            onChange={(e) => setMail({ ...mail, message: e.target.value })}
            value={mail.message}
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </textarea>
        </div>

        <button
          onClick={sendEmail}
          disabled={loading}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-60 disabled:cursor-not-allowed">
          {(loading) ? 'Sending' : 'Send Email'}
        </button>
      </div>

      {
        msg && (
          <div className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Info !</span> {msg}
            </div>
          </div>
        )
      }

    </main>
  )
}
