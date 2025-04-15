
import { Footprints, Flame, Heart, Clock } from "lucide-react";
import CircularProgress from "./CircularProgress";
import { Card, CardContent } from "@/components/ui/card";

interface ActivityData {
  steps: {
    value: number;
    goal: number;
  };
  calories: {
    value: number;
    goal: number;
  };
  heartRate: {
    value: number;
    min: number;
    max: number;
  };
  activeMinutes: {
    value: number;
    goal: number;
  };
}

interface ActivitySummaryProps {
  data: ActivityData;
}

const ActivitySummary = ({ data }: ActivitySummaryProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Steps Card */}
      <Card className="card-shadow card-hover">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-500">Steps</h3>
            <div className="p-2 rounded-full bg-blue-100">
              <Footprints className="h-5 w-5 text-primary" />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <CircularProgress 
              value={data.steps.value} 
              max={data.steps.goal} 
              color="hsl(var(--primary))"
              label={data.steps.value.toLocaleString()}
              sublabel={`Goal: ${data.steps.goal.toLocaleString()}`}
            />
            <div className="mt-2 text-sm text-muted-foreground">
              {Math.round((data.steps.value / data.steps.goal) * 100)}% of daily goal
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Calories Card */}
      <Card className="card-shadow card-hover">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-500">Calories</h3>
            <div className="p-2 rounded-full bg-orange-100">
              <Flame className="h-5 w-5 text-orange-500" />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <CircularProgress 
              value={data.calories.value} 
              max={data.calories.goal} 
              color="rgb(249, 115, 22)"
              label={data.calories.value.toLocaleString()}
              sublabel="kcal burned"
            />
            <div className="mt-2 text-sm text-muted-foreground">
              {Math.round((data.calories.value / data.calories.goal) * 100)}% of daily goal
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Heart Rate Card */}
      <Card className="card-shadow card-hover">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-500">Heart Rate</h3>
            <div className="p-2 rounded-full bg-red-100">
              <Heart className="h-5 w-5 text-red-500" />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <CircularProgress 
              value={data.heartRate.value} 
              max={200} 
              color="rgb(239, 68, 68)"
              label={`${data.heartRate.value}`}
              sublabel="bpm average"
            />
            <div className="mt-2 text-sm text-muted-foreground">
              Range: {data.heartRate.min} - {data.heartRate.max} bpm
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Active Minutes Card */}
      <Card className="card-shadow card-hover">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-500">Active Minutes</h3>
            <div className="p-2 rounded-full bg-violet-100">
              <Clock className="h-5 w-5 text-violet-500" />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <CircularProgress 
              value={data.activeMinutes.value} 
              max={data.activeMinutes.goal} 
              color="rgb(139, 92, 246)"
              label={`${data.activeMinutes.value}`}
              sublabel="minutes"
            />
            <div className="mt-2 text-sm text-muted-foreground">
              {Math.round((data.activeMinutes.value / data.activeMinutes.goal) * 100)}% of daily goal
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivitySummary;
