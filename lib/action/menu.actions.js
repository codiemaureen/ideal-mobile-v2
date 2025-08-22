'use server';


export async function getAllMenuDrawerOptions(){
 return [
  {
   title: 'Schedule Detail', 
   link: '/schedule-detail',
   subtitles: [
    {
     title: 'Complete Detail',
     link:  '/complete-detail'
    },
    {
     title: 'Supreme Detail',
     link:  '/supreme-detail'
    },
    {
     title: 'Ultimate Detail',
     link:  '/ultimate-detail'
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
     link: '/'
    },
    {
     title: 'Google',
     link: '/'
    },
    {
     title: 'Instagram',
     link: '/'
    },
  ]
  }
 ]
}