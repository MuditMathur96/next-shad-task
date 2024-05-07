import getData from "@/utils/get-data";
import { board } from "../../../types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const BcfBoards = async()=>{
    const data:{boards:board[]} = await getData("https://demo6396395.mockable.io/bcf-boards")
    return (<div className="w-full max-w-3xl px-2 mx-auto py-8 md:py-10">
        <h1
        className="text-2xl font-medium"
        >BCF Boards</h1>
        <Separator 
        className="mb-8"
        />
        <Accordion type="single" collapsible >
            {
                data.boards.map((board)=>{
                    return (<AccordionItem 
                    key={board.id}
                    value={board.name}>
                        <AccordionTrigger>{board.name}</AccordionTrigger>
                        <AccordionContent>
                            {Array.isArray(board.bcfs) &&<Table>
                                <TableHeader>
                                    <TableHead>Id</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead></TableHead>
                                </TableHeader>
                                <TableBody>
                                    {
                                        board.bcfs.map((b)=>{
                                            return (<TableRow
                                            key={b.id}
                                            >
                                                <TableCell>{b.id}</TableCell>
                                                <TableCell>{b.name}</TableCell>
                                                {Array.isArray(b.bcfBoards) && <TableCell>
                                                    <Sheet>
                                                        <SheetTrigger>
                                                            <Eye />
                                                        </SheetTrigger>
                                                        <SheetContent>
                                                            <SheetHeader>
                                                                <SheetTitle>BCF Boards</SheetTitle>
                                                                <SheetTitle>{board.name} - {b.name}</SheetTitle>
                                                            </SheetHeader>
                                                            <Table>
                                                                <TableHeader>
                                                                    <TableHead>Id</TableHead>
                                                                    <TableHead>Name</TableHead>
                                                                </TableHeader>
                                                                <TableBody>
                                                                    {
                                                                        b.bcfBoards.map((bBoard)=>{
                                                                            return (<TableRow
                                                                            key={bBoard.id}
                                                                            >
                                                                            <TableCell>{bBoard.id}</TableCell>
                                                                            <TableCell>{bBoard.name}</TableCell>
                                                                            </TableRow>)
                                                                        })
                                                                    }
                                                                </TableBody>
                                                            </Table>
                                                           
                                                        </SheetContent>
                                                    </Sheet>
                                                    </TableCell>}

                                            </TableRow>)
                                        })
                                    }
                                </TableBody>
                            </Table>}
                        </AccordionContent>
                    </AccordionItem>)
                })
            }
        </Accordion>
    </div>)
}

export default BcfBoards;