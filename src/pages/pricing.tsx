import { title } from "@/components/primitives";

import React, { useEffect, useState } from 'react';
import DefaultLayout from "@/layouts/default";

export default function UserPage() {

  const [userData, setUserData] = useState<{ name: string; email: string }>({ name: '', email: '' });


  useEffect(() => {
    // Fetch data from Spring Boot API
    fetch("http://localhost:8080/api/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log(data);
        setUserData(data); // Set the fetched data to state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          {/* <h1 className={title()}>Pricing</h1> */}
          <div>
            
        </div>
        </div>
      </section>
    </DefaultLayout>
  );
}