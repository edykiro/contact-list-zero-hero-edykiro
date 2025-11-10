export const createContactForUser = async (
  user,
  fullName,
  fullMail,
  fullPhone,
  fullAddress
) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${user}/contacts`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullName,
        phone: fullPhone,
        email: fullMail,
        address: fullAddress,
      }),
    }
  );
  console.log("Recieved data in fetch " + user);
  console.log("Recieved data in fetch " + fullName);
  console.log("Recieved data in fetch " + fullPhone);
  console.log("Recieved data in fetch " + fullMail);
  console.log("Recieved data in fetch " + fullAddress);

  if (response.ok) {
    const data = await response.json();
    return data.agendas;
  } else {
    const message = { error: response.statusText };
    console.log(message);
  }
};

export const refreshUserContacts = async (userName) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${userName}/contacts/`,
    {
      method: "GET",
      headers: {
        accept: "application/json"
      },
      
    }
  );
  if (response.ok) {
    const data = await response.text();
    return data;
  } else {
    const message = { error: response.statusText };
    console.log(message);
  }
};





export const deleteContactForUser = async (userName,contactID) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${userName}/contacts/${contactID}`,
    {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      
    }
  );
  if (response.ok) {
    const data = await response.text();
    console.log(data)
    return data;

  } else {
    const message = { error: response.statusText };
    console.log(message);
  }
};