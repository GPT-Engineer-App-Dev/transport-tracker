import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RoutesPage = () => {
  return (
    <div className="space-y-4">
      <Button>Add Route</Button>
      <Card>
        <CardHeader>
          <CardTitle>Route List</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Route ID: 1, Start: City A, End: City B, Distance: 100 km</li>
            <li>Route ID: 2, Start: City C, End: City D, Distance: 200 km</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoutesPage;