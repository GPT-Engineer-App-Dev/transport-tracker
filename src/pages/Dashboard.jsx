import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Metrics Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Trips: 120</p>
          <p>Total Distance: 1500 km</p>
          <p>Average Speed: 60 km/h</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Trips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Vehicle: Truck 1, Driver: John Doe, Route: Route A, Time: 2 hours ago</li>
            <li>Vehicle: Truck 2, Driver: Jane Smith, Route: Route B, Time: 3 hours ago</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;