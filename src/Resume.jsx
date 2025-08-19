import PropTypes from 'prop-types';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image
} from '@react-pdf/renderer'

const style = StyleSheet.create({
  section1: {
    padding: 20,
    paddingTop: 60,
    width: '40%',
    height: '100vh',
    backgroundColor: '#f3f4f6'
  },
  section2: {
    paddingVertical: 20,
    paddingTop: '148px',
    paddingHorizontal: 10,
    width: '60%',
    height: '100vh',
    backgroundColor: '#ffffff'
  },
  pageview: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  page: {
    fontFamily: 'Helvetica'
  },
  section: {
    marginVertical: 12
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom:10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#1d4ed8',
    fontSize: 16,
    fontWeight: 'bold'
  },
  text: {
    lineHeight: 1.5,
    fontSize: 11,
    maxWidth: '325px'
  },
  subject: {
    paddingLeft: 4,
    textAlign: 'center',
    fontSize: 12
  },
  education: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2px'
  },
  responsibility: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '8px'
  },
  year: {
    color: 'blue',
    lineHeight: 1.5,
    fontSize: 11
  },
  grade: {
    fontWeight: 'bold',
    lineHeight: 1.5,
    fontSize: 11
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '14px',
    marginVertical: '3px'
  }
})


const Resume = ({data} ) => (
  <Document>
    <Page style={style.page}>
      <View style={style.pageview}>
        <View style={style.section1}>
          {(data.name || data.subject) && (
            <View style={style.section}>
              {data.name && <Text style={style.title}>{data.name}</Text>}
              {data.subject && <Text style={style.subject}>{data.subject}</Text>}
            </View>
          )}

          {/* Personal Details */}
          {(data.birth || data.gender || data.status || data.address || data.cnic) && (
            <View>
              <View style={style.section}>
                <Text style={style.subtitle}>Personal Details</Text>
              </View>
              {data.birth && (
                <View style={style.line}>
                  <Image src='../icon/birth.svg' style={{ width: 12, height: 12 }} />
                  <Text style={style.text}>{new Date(data.birth).toLocaleDateString('en-US')}</Text>
                </View>
              )}
              {data.gender && (
                <View style={style.line}>
                  <Image src='../icon/gender.svg' style={{ width: 12, height: 12 }} />
                  <Text style={style.text}>{data.gender}</Text>
                </View>
              )}
              {data.status && (
                <View style={style.line}>
                  <Image src='../icon/status.svg' style={{ width: 12, height: 12 }} />
                  <Text style={style.text}>{data.status}</Text>
                </View>
              )}
              {data.address && (
                <View style={style.line}>
                  <Image src='../icon/address.svg' style={{ width: 12, height: 12 }} />
                  <Text style={style.text}>{data.address}</Text>
                </View>
              )}
              {data.cnic && (
                <View style={style.line}>
                  <Image src='../icon/id.svg' style={{ width: 12, height: 12 }} />
                  <Text style={style.text}>{data.cnic}</Text>
                </View>
              )}
            </View>
          )}

          {/* Contact */}
          {(data.email || data.phone) && (
            <View>
              <View style={style.section}>
                <Text style={style.subtitle}>Contact Information</Text>
              </View>
              {data.email && (
                <View style={style.line}>
                  <Image src='../icon/email.png' style={{ width: 12, height: 12 }} />
                  <Text style={style.text}>{data.email}</Text>
                </View>
              )}
              {data.phone && (
                <View style={style.line}>
                  <Image src='../icon/phone.png' style={{ width: 12, height: 12 }} />
                  <Text style={style.text}>{data.phone}</Text>
                </View>
              )}
            </View>
          )}

          {/* Skills */}
          {data.skills && (
            <View>
              <View style={style.section}>
                <Text style={style.subtitle}>Skills</Text>
              </View>
              {data.skills.split('\n').map(
                (skill, i) =>
                  skill && (
                    <View key={i} style={style.line}>
                      <Text style={style.text}>• {skill}</Text>
                    </View>
                  )
              )}
            </View>
          )}

          {/* Languages */}
          {data.language && (
            <View>
              <View style={style.section}>
                <Text style={style.subtitle}>Languages</Text>
              </View>
              {data.language.split('\n').map(
                (lang, i) =>
                  lang && (
                    <View key={i} style={style.line}>
                      <Text style={style.text}>• {lang}</Text>
                    </View>
                  )
              )}
            </View>
          )}

          {/* Hobbies */}
          {data.hobbies && (
            <View>
              <View style={style.section}>
                <Text style={style.subtitle}>Hobbies</Text>
              </View>
              {data.hobbies.split('\n').map(
                (hob, i) =>
                  hob && (
                    <View key={i} style={style.line}>
                      <Text style={style.text}>• {hob}</Text>
                    </View>
                  )
              )}
            </View>
          )}
        </View>

        {/* Right Section */}
        <View style={style.section2}>
          {data.education.some(e => e.degree || e.year || e.grade) && (
            <View>
              <View style={style.section}>
                <Text style={style.subtitle}>Education</Text>
              </View>
              {data.education.map(
                (edu, i) =>
                  (edu.degree || edu.year || edu.grade) && (
                    <View key={i} style={style.education}>
                      {edu.degree && <Text style={style.text}>{edu.degree}</Text>}
                      {edu.year && <Text style={style.year}>{edu.year}</Text>}
                      {edu.grade && <Text style={style.grade}>{edu.grade}</Text>}
                    </View>
                  )
              )}
            </View>
          )}

          {data.experiences && (
            <View>
              <View style={style.section}>
                <Text style={style.subtitle}>Experiences</Text>
              </View>
              <View style={style.line}>
                <Text style={style.text}>{data.experiences}</Text>
              </View>
            </View>
          )}

          {data.responsible && (
            <View>
              <View style={style.section}>
                <Text style={style.subtitle}>Responsibilities</Text>
              </View>
              {data.responsible.split('\n').map(
                (respons, i) =>
                  respons && (
                    <View key={i} style={style.responsibility}>
                      <Text style={style.text}>•</Text>
                      <Text style={style.text}>{respons}</Text>
                    </View>
                  )
              )}
            </View>
          )}

          {data.summary && (
            <View>
              <View style={style.section}>
                <Text style={style.subtitle}>Summary</Text>
              </View>
              <View style={style.line}>
                <Text style={style.text}>{data.summary}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </Page>
  </Document>
)
Resume.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    subject: PropTypes.string,
    cnic: PropTypes.string,
    birth: PropTypes.string,
    gender: PropTypes.string,
    status: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    skills: PropTypes.string,
    education: PropTypes.arrayOf(
      PropTypes.shape({
        degree: PropTypes.string,
        year: PropTypes.string,
        grade: PropTypes.string
      })
    ),
    experiences: PropTypes.string,
    responsible: PropTypes.string,
    language: PropTypes.string,
    hobbies: PropTypes.string,
    summary: PropTypes.string
  }).isRequired
};

export default Resume;