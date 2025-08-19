import { useState } from 'react'
import Resume from './Resume'
import './index.css'
import {
  PDFDownloadLink,
} from '@react-pdf/renderer'


function App() {
  const [data, setdata] = useState({
  name: "",
  subject: "",
  cnic: "",
  birth: "",
  gender: "",
  status: "",
  address: "",
  email: "",
  phone: "",
  skills: "",
  education: [
    { degree: "", year: "", grade: "" }, ],
  experiences: "",
  responsible: "",
  language: "",
  hobbies: "",
  summary: ""
}
)

  const handleChange = e => {
    const { name, value } = e.target
    const keys = name.split('.')

    if (keys.length > 1) {
      setdata(prev => ({
        ...prev,
        [keys[0]]: prev[keys[0]].map((item, idx) =>
          idx === parseInt(keys[1]) ? { ...item, [keys[2]]: value } : item
        )
      }))
    } else {
      setdata(prev => ({ ...prev, [name]: value }))
    }
  }

  const addEducation = () => {
    setdata(prev => ({
      ...prev,
      education: [...prev.education, { degree: '', year: '', grade: '' }]
    }))
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 flex flex-col items-center p-6'>
      <h1 className='text-3xl font-bold mb-6 text-blue-700'>Resume Generator</h1>

      <form className='w-full max-w-3xl bg-gray-400 shadow-lg rounded-xl p-6 space-y-4'>
        <input
          type='text'
          name='name'
          value={data.name}
          onChange={handleChange}
          placeholder='Enter Full Name'
          className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none'
        />
        <input
          type='text'
          name='subject'
          value={data.subject}
          onChange={handleChange}
          placeholder='Enter Subject'
          className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none'
        />
        <input
          type='date'
          name='birth'
          value={data.birth}
          onChange={handleChange}
          className='w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none'
        />
        <input
          type='text'
          name='cnic'
          value={data.cnic}
          onChange={handleChange}
          placeholder='Enter CNIC'
          className='w-full border rounded-lg px-4 py-2'
        />
        <input
          type='text'
          name='address'
          value={data.address}
          onChange={handleChange}
          placeholder='Address'
          className='w-full border rounded-lg px-4 py-2'
        />
        <input
          type='email'
          name='email'
          value={data.email}
          onChange={handleChange}
          placeholder='Email'
          className='w-full border rounded-lg px-4 py-2'
        />
        <input
          type='text'
          name='phone'
          value={data.phone}
          onChange={handleChange}
          placeholder='Phone'
          className='w-full border rounded-lg px-4 py-2'
        />

        {/* Education */}
        <div className='flex  flex-col items-center gap-4'>
          <h2 className='font-semibold text-blue-600'>Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className='grid grid-cols-1 md:grid-cols-3 gap-2'>
              <input
                type='text'
                name={`education.${index}.degree`}
                placeholder='Degree'
                value={edu.degree}
                onChange={handleChange}
                className='border rounded-lg px-3 py-2 w-full'
              />
              <input
                type='text'
                name={`education.${index}.year`}
                placeholder='Year'
                value={edu.year}
                onChange={handleChange}
                className='border rounded-lg px-3 py-2 w-full'
              />
              <input
                type='text'
                name={`education.${index}.grade`}
                placeholder='Grade'
                value={edu.grade}
                onChange={handleChange}
                className='border rounded-lg px-3 py-2 w-full'
              />
            </div>
          ))}
          <button
            type='button'
            onClick={addEducation}
            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
          >
            Add Education
          </button>
        </div>

                <textarea
          name='skills'
          value={data.skills}
          onChange={handleChange}
          placeholder='Enter skills (one per line)'
          className='w-full border rounded-lg px-4 py-2'
        />

        <textarea
          name='responsible'
          value={data.responsible}
          onChange={handleChange}
          placeholder='Responsibilities'
          className='w-full border rounded-lg px-4 py-2'
        />
        <textarea
          name='experiences'
          value={data.experiences}
          onChange={handleChange}
          placeholder='Experiences'
          className='w-full border rounded-lg px-4 py-2'
        />
        <textarea
          name='language'
          value={data.language}
          onChange={handleChange}
          placeholder='Languages (one per line)'
          className='w-full border rounded-lg px-4 py-2'
        />
        <textarea
          name='hobbies'
          value={data.hobbies}
          onChange={handleChange}
          placeholder='Hobbies (one per line)'
          className='w-full border rounded-lg px-4 py-2'
        />
        <textarea
          name='summary'
          value={data.summary}
          onChange={handleChange}
          placeholder='Summary'
          className='w-full border rounded-lg px-4 py-2'
        />
      </form>

      <PDFDownloadLink document={<Resume data={data} />}>
        {({ loading }) =>
          loading ? (
            <button className='mt-6 bg-gray-400 text-white px-6 py-2 rounded-lg'>
              Loading...
            </button>
          ) : (
            <button className='mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700'>
              Download Resume
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  )
}

export default App
