import Head from "next/head";
import { MongoClient } from "mongodb";
import { Fragment, useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch static data from database or file system or call the API

  const connectedClient = await MongoClient.connect(
    "mongodb+srv://rohit4java:rohitnext241292@cluster0.icluy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  const db = connectedClient.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  connectedClient.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   return { props: { meetups: DUMMY_MEeTUPS } };
// }

export default HomePage;
