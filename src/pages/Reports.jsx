import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Reports = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input type="date" placeholder="Start Date" />
            <Input type="date" placeholder="End Date" />
            <Input type="text" placeholder="Vehicle ID" />
            <Input type="text" placeholder="Driver ID" />
            <Input type="text" placeholder="Route ID" />
            <Button type="submit">Generate</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Report List</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Report ID: 1, Date Range: 2023-01-01 to 2023-01-31, Vehicle: 1, Driver: 1, Route: 1</li>
            <li>Report ID: 2, Date Range: 2023-02-01 to 2023-02-28, Vehicle: 2, Driver: 2, Route: 2</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;