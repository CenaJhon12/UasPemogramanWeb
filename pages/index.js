import Head from 'next/head'
import Image from 'next/image'
import UserLayout from '../components/user/UserLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <UserLayout>
      <div className ="container mt-4">
      <h3>Home</h3>
      </div>
      </UserLayout>
    </div>
  )
}
