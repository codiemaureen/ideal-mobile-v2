'use server';


export async function getAllMenuDrawerOptions(){
  return [
    {
    title: 'Schedule Detail', 
    link: '/schedule-detail',
    subtitles: [
      {
      title: 'Complete Detail',
      link:  '/schedule-complete-detail'
      },
      {
      title: 'Supreme Detail',
      link:  '/schedule-supreme-detail'
      },
      {
      title: 'Ultimate Detail',
      link:  '/schedule-ultimate-detail'
      }
    ]
    },
    {
    title: 'Gallery', 
    link: '/gallery',
    },
    {
    title: 'Contact Us', 
    link: '/contact-us',
    subtitles: [
        {
        title: 'Phone',
        link: '/'
        },
        {
        title: 'Facebook',
        link: 'https://www.facebook.com/people/Ideal-Mobile-Detailing/100063524828430'
        },
        {
        title: 'Google',
        link: '/https://www.google.com'
        },
        {
        title: 'Instagram',
        link: '/https://www.instagram.com'
        },
      ]
    }
  ]
}