import Link from 'next/link'
import './link.css'

const A = ({href, children, color='white'}) => {
  return <Link href={href} className={`link link-${color}`}>{children}</Link>
}

const ABlock = ({href, target='', children}) => {
  return <Link href={href} target={target} className={`link-block`}>{children}</Link>
}

export { A, ABlock }