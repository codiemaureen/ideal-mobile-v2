import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject(value) {
  return JSON.parse(JSON.stringify(value));
}

export function formatError(error){
  if(error.name === 'ZodError') {
    const fieldErrors  = Object.keys(error.errors).map((field) => error.errors[field].message);

    return fieldErrors.join('. ');
  } else if (error.name === 'PrismaClientKnownRequestError' && error.code === 'P2002') {
    const field = error.meta?.targe ? error.meta?.target[0] : 'field';
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exist`;
  } else {
    return typeof error.message === 'string' ? error.message : JSON.stringify(error.message);
  }
}

//Shorten the UUID
export function formatId(id){
  return `..${id.substring(id.length - 6)}`
}