export const getAllAgendas = async () => {
  const response = await fetch(
    'https://playground.4geeks.com/contact/agendas?offset=0&limit=50',
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data.agendas;
  } else {
    const message = { error: response.statusText };
    console.log(message);
  }
};

export const getSingleContactAgenda = async (userName) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${userName}/contacts`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data.contacts;
  } else {
    const message = { error: response.statusText };
    console.log(message);
  }
};

export const createNewAgenda = async (userName) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${userName}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    const message = { error: response.statusText };
    console.log(message);
  }
};

export const deleteUserAgenda = async (userName) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${userName}?tags=Agenda%20operations&summary=Delete%20Agenda.&description=Deletes%20a%20specific%20agenda%20from%20the%20database.`,
    {
      method: "DELETE",
      headers: {
        accept: "application/json",
      },
    }
  );
  console.log(userName);
  if (response.ok) {
    return true;
  } else {
    const message = { error: response.statusText };
    return false;
  }
};



