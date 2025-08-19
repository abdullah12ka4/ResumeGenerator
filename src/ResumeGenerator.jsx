import { useState } from 'react'
import Resume from './Resume'
import './index.css'
import {
  PDFDownloadLink,
} from '@react-pdf/renderer'


function App() {
  const [data, setdata] = useState({
  "name": "Abdullah Khan",
  "subject": "Frontend Web Developer",
  "cnic": "35202-1234567-8",
  "birth": "1997-08-14",
  "gender": "Male",
  "status": "Single",
  "address": "123 Street, Lahore, Pakistan",
  "email": "abdullah.dev@example.com",
  "phone": "+92 300 1234567",
  "skills": "HTML5\nCSS3 / TailwindCSS / Bootstrap\nJavaScript (ES6+)\nReact.js / Next.js\nTypeScript\nREST API & GraphQL\nGit & GitHub\nResponsive Design\nTesting (Jest, React Testing Library)\nFigma to Code",
  "education": [
    { "degree": "BS Computer Science - University of Lahore", "year": "2019 - 2023", "grade": "3.6/4.0 GPA" },
    { "degree": "Intermediate (Pre-Engineering) - Punjab College", "year": "2017 - 2019", "grade": "A Grade" }
  ],
  "experiences": "Frontend Developer at TechVision Pvt. Ltd. (Jan 2023 – Present)\nWorked on multiple SaaS web applications and optimized performance by 30%. Collaborated with backend developers and designers in an Agile environment.",
  "responsible": "Develop and maintain responsive web applications using React.js and TailwindCSS\nImplement reusable UI components and custom hooks\nIntegrate REST APIs and GraphQL queries\nOptimize performance and accessibility (Lighthouse 90+)\nVersion control using Git/GitHub and CI/CD pipelines\nCollaborate with designers to convert Figma wireframes to responsive code\nWrite unit tests and maintain code quality with ESLint and Prettier",
  "language": "English (Fluent)\nUrdu (Native)\nPunjabi (Conversational)",
  "hobbies": "Coding side projects\nOpen-source contributions\nUI/UX design exploration\nGaming\nTraveling",
  "summary": "Highly motivated Frontend Web Developer with 2+ years of experience building responsive and user-friendly web applications using React.js, TailwindCSS, and modern JavaScript frameworks. Strong background in UI/UX implementation, API integration, and performance optimization. Passionate about writing clean, maintainable code and continuously learning new technologies to deliver high-quality digital experiences."
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
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center p-6'>
      <h1 className='text-3xl font-bold mb-6 text-blue-700'>Resume Generator</h1>

      <form className='w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 space-y-4'>
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
