import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import uniqid from 'uniqid'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { about } from '../../portfolio'
import profilePic from '../../profile-pic.jpg'

library.add(fab)

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <img className='about__pic' src={profilePic} alt='profile'/>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}.</h2>}
      {/* <p className='about__desc'>{description && description}</p> */}
      <ul className='about__desc'>{description?.map((line) => (
        <li key={uniqid()}>{line}</li>
      ))}</ul>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.medium && (
              <a
                href={social.medium}
                aria-label='medium'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon="fa-brands fa-medium" />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
