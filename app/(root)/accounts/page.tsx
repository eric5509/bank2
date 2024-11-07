import Backdrop from "@/components/account/AccountModal";
import UserTable from "@/components/account/AccountsTable";
import BackdropParent from "@/components/shared/Backdrop";
import Framer from "@/lib/Framer";
import AccountTitle from "@/components/account/AccountTitle";

export default async function AccountsPage() {
  const data = await fetch('http://localhost:5000/accounts')
  const response = await data.json()
  const results = response.data
  return (
    <Framer>
        <AccountTitle />
        <UserTable results={results}/>
    </Framer>
  );
}
