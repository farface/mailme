import { dates } from "@/data/data";
import { UserProps } from "../types/types";
import SubmitButton from "./SubmitButton";

const UserInformation = ({ userData, setUserData }: UserProps) => {
  return (
    <div className="mx-2 mt-10">
      <div className="mb-6 ">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            id="First name"
            className="bg-inactiveInput border text-l text-black rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
            placeholder="First name"
            required
            value={userData.firstname}
            onChange={(e) =>
              setUserData({ ...userData, firstname: e.target.value })
            }
          />
          <input
            type="text"
            id="Last name"
            className="bg-inactiveInput border text-l text-black rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
            placeholder="Last name"
            required
            value={userData.lastname}
            onChange={(e) =>
              setUserData({ ...userData, lastname: e.target.value })
            }
          />
        </div>
        <input
          type="email"
          id="success"
          className="bg-inactiveInput border text-l text-black rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
          placeholder="Email"
          required
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <label htmlFor="success" className="block mb-2 text-sm font-medium">
        Pick a time...
      </label>
      <select
        name="time"
        id="time"
        className="w-full text-black mb-4"
        required
        onChange={(e) => setUserData({ ...userData, date: e.target.value })}
      >
        <option value="">Times</option>
        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>

      <SubmitButton userData={userData} />
    </div>
  );
};

export default UserInformation;
