import { Course } from '../../../types';

export const JEE_COURSES: Course[] = [
  { 
    id: 'jee-physics',
    name: 'Physics',
    description: 'Comprehensive JEE Physics preparation',
    duration: '6 months',
    fees: 15000,
    schedule: {
      startTime: '09:00',
      endTime: '11:00',
      days: ['Monday', 'Wednesday', 'Friday']
    }
  },
  {
    id: 'jee-chemistry',
    name: 'Chemistry',
    description: 'Complete JEE Chemistry course',
    duration: '6 months',
    fees: 15000,
    schedule: {
      startTime: '11:30',
      endTime: '13:30',
      days: ['Monday', 'Wednesday', 'Friday']
    }
  },
  {
    id: 'jee-mathematics',
    name: 'Mathematics',
    description: 'In-depth JEE Mathematics preparation',
    duration: '6 months',
    fees: 15000,
    schedule: {
      startTime: '14:00',
      endTime: '16:00',
      days: ['Tuesday', 'Thursday', 'Saturday']
    }
  }
];

export const NEET_COURSES: Course[] = [
  {
    id: 'neet-physics',
    name: 'Physics',
    description: 'NEET Physics preparation course',
    duration: '6 months',
    fees: 15000,
    schedule: {
      startTime: '09:00',
      endTime: '11:00',
      days: ['Tuesday', 'Thursday', 'Saturday']
    }
  },
  {
    id: 'neet-chemistry',
    name: 'Chemistry',
    description: 'NEET Chemistry course',
    duration: '6 months',
    fees: 15000,
    schedule: {
      startTime: '11:30',
      endTime: '13:30',
      days: ['Tuesday', 'Thursday', 'Saturday']
    }
  },
  {
    id: 'neet-biology',
    name: 'Biology',
    description: 'Comprehensive NEET Biology preparation',
    duration: '6 months',
    fees: 15000,
    schedule: {
      startTime: '14:00',
      endTime: '16:00',
      days: ['Monday', 'Wednesday', 'Friday']
    }
  }
];