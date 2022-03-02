import Image from "next/image";
import type { GetContactsOneGraphResponseProps } from "@/types/Network";
import { ThreadTime } from "..";
import Link from "next/link";

export type HubSpotTableProps = {
  hubspotData: GetContactsOneGraphResponseProps;
};

export default function HubSpotTable({ hubspotData }: HubSpotTableProps) {
  const hubspotRes =
    hubspotData.data.hubspot.makeRestCall.get.jsonBody.results;
  return (
    <div className='flex flex-col w-full min-w-full mt-24'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    IP Address
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Status
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Details
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {hubspotRes
                  .map((person, j) => (
                    <tr key={hubspotRes.length ** -++j}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <Image
                              height='32'
                              width='32'
                              className='h-10 w-10 rounded-full'
                              src={"/cortina-icon.png"}
                              alt='cortina logo'
                            />
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              {person.properties.email}
                            </div>
                            <div className='text-sm text-gray-800'>
                              {person.properties.firstname ?? ""}&nbsp;
                              {person.properties.lastname ?? "-"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>
                          {person.properties.city}
                        </div>
                        <div className='text-sm text-gray-500'>
                          <ThreadTime
                            precedingDescription={"Created"}
                            time={new Date(person.properties.createdate)}
                          />
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                          Active
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        <Link
                          href='/hubspot/contacts/[email]'
                          as={`/hubspot/contacts/${person.properties.email}`}
                          shallow={true}
                          passHref={true}
                          scroll={true}>
                          <a
                            type='button'
                            className='inline-flex font-interVar items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            {"Details"}
                          </a>
                        </Link>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <a
                          href='#'
                          className='text-indigo-600 hover:text-indigo-900'>
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))
                  .reverse()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
  // const [userIp, setUserIp] = useState<string>("");
  // const userIpRef = useRef<string>(userIp);

  // console.log(userIp ?? "");
  // const { data } = useSWR<ResProps, any>(
  //   () => (userIp !== "" ? `/api/network/?userIp=${userIp}` : ""),
  //   ipFetcher
  // );
