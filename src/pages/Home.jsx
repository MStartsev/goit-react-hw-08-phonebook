// import React from 'react';
import css from './pages.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Introducing "PhoneBook": Your Ultimate Contact Management Solution
      </h1>
      <p className={css.text}>
        Welcome to "PhoneBook," your all-in-one contact management website
        designed to simplify your communication needs. Whether you're a busy
        professional, a small business owner, or simply looking to stay
        organized, PhoneBook is here to streamline your contact information and
        enhance your communication experience. Effortlessly Store and Access
        Your Contacts: With PhoneBook, you can bid farewell to the hassle of
        managing physical address books or scattered contact information. Our
        user-friendly interface allows you to effortlessly store and access all
        your contacts in one secure online location. Simply create an account,
        and you'll have a centralized hub for all your contact needs.
      </p>
      <p className={css.text}>
        Sync Across Devices: Never worry about losing your contacts again.
        PhoneBook syncs seamlessly across multiple devices, ensuring that your
        contacts are always up to date and accessible wherever you go. Whether
        you're using a smartphone, tablet, or computer, simply log in to your
        account, and all your contacts will be right at your fingertips.
      </p>
    </div>
  );
};

export default Home;
