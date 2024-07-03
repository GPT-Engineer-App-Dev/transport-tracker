import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Drivers = () => {
  return (
    <div className="space-y-4">
      <Button>Add Driver</Button>
      <Card>
        <CardHeader>
          <CardTitle>Driver List</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Driver ID: 1, Name: John Doe, License: ABC123, Status: Active</li>
            <li>Driver ID: 2, Name: Jane Smith, License: XYZ789, Status: Inactive</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Drivers;