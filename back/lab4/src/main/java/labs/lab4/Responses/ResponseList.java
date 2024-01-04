package labs.lab4.Responses;

import java.util.ArrayList;

public class ResponseList 
{
    private static ArrayList<Response> mainList = new ArrayList<Response>();

    public void add (Response item)
    {
        mainList.add(item);
    }

    public static ArrayList<Response> getMainList()
    {
        return mainList;
    }

    public static void setMainList(ArrayList<Response> mainList)
    {
        ResponseList.mainList = mainList;
    }

    public String getResponses()
    {
        String returnedLine = "";
        for(int i = 0; i < mainList.size(); i++)
        {
            returnedLine += mainList.get(i).getResponse() + " ";
        }
        return returnedLine;
    }
}
