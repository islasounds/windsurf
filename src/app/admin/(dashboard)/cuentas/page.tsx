import { CreateLabelForm } from "@/components/CreateLabelForm";
import UserTable from "@/components/UserTable";
import { AdminServices } from "@/services/AdminServices";

export const dynamic = "force-dynamic";

export default async function Cuentas() {
  try {
    const users = await AdminServices.getAllUsers();
    return (
      <div className="container mx-auto md:p-6 text-gray-800">
        <h1 className="text-2xl font-semibold mb-6">Cuentas</h1>
        <CreateLabelForm />
        <UserTable users={users} type="admin" />
      </div>
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return (
      <div className="container mx-auto p-6 text-gray-800">
        <h1 className="text-2xl font-semibold mb-6">Cuentas</h1>
        <p>Failed to load user data. Please try again later.</p>
      </div>
    );
  }
}
