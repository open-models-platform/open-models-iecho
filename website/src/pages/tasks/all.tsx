import Head from "next/head";
import { TaskOption } from "src/components/Dashboard";
import { allTaskOptions } from "src/components/Dashboard/TaskOption";
import { DashboardLayout } from "src/components/Layout";
export { getStaticProps } from "src/lib/defaultServerSideProps";

const AllTasks = () => {
  return (
    <>
      <Head>
        <title>All Tasks - Open Models iEcho</title>
        <meta name="description" content="All tasks for Open Models iEcho." />
      </Head>
      <TaskOption content={allTaskOptions} />
    </>
  );
};

AllTasks.getLayout = DashboardLayout;

export default AllTasks;
