'use client';
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

export default function Error(error:Error) {
  return (
    <ErrorMessage pageError={error} />
  );
}