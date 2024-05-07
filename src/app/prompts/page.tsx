import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import getData from "@/utils/get-data";
import { prompt } from "../../../types";
import moment from "moment";
import { Separator } from "@/components/ui/separator";
const Prompts = async()=>{
    const data:prompt[] = await getData("https://demo6396395.mockable.io/prompts");
    return (<div className="md:w-3/4 mx-auto max-w-3xl py-8 md:py-10">
           <h1
        className="text-2xl font-medium"
        >Prompts</h1>
        <Separator 
        className="mb-8"
        />
        <Table>
  <TableCaption>A list of all the prompts.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Id</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Created At</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
        data.map((prompt)=>{
            return ( <TableRow key={prompt.id}>
                <TableCell className="font-medium">{prompt.id}</TableCell>
                <TableCell>{prompt.name}</TableCell>
                <TableCell>{moment(prompt.createdAt).format("DD-MM-YYYY").toString()}</TableCell>
               
              </TableRow>)
        })
    }
   
  </TableBody>
</Table>
    </div>)
}

export default Prompts;