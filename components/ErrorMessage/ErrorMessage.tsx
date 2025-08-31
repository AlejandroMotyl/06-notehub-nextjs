import css from "./ErrorMessage.module.css"
interface ErorrMessageProps{
    pageError?: Error | null
}

export default function ErrorMessage({pageError}:ErorrMessageProps) {
    return (
<p className={css.text}>
  There was an error {pageError?.message && `(${pageError.message})`}, please try again...
</p>

    )
}