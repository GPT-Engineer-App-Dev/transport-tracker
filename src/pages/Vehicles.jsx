import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Vehicles = () => {
  return (
    <div className="space-y-4">
      <Button>Add Vehicle</Button>
      <Card>
        <CardHeader>
          <CardTitle>Vehicle List</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Vehicle ID: 1, Type: Truck, Status: Active, Last Maintenance: 2023-01-01</li>
            <li>Vehicle ID: 2, Type: Van, Status: Inactive, Last Maintenance: 2023-02-01</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Vehicles;