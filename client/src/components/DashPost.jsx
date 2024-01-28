import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DashPost() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setuserPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setuserPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);

  console.log(userPosts);
  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700">
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <div>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell className="font-medium text-gray-900 dark:text-white">
                Data updated
              </Table.HeadCell>
              <Table.HeadCell className="font-medium text-gray-900 dark:text-white">
                Post image
              </Table.HeadCell>
              <Table.HeadCell className="font-medium text-gray-900 dark:text-white">
                Post title
              </Table.HeadCell>
              <Table.HeadCell className="font-medium text-gray-900 dark:text-white">
                Category
              </Table.HeadCell>
              <Table.HeadCell className="font-medium text-gray-900 dark:text-white">
                Delete
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="font-medium text-gray-900 dark:text-white">
                  Edit
                </span>
              </Table.HeadCell>
            </Table.Head>
            {userPosts.map((post) => (
              <Table.Body className="divide-y" key={post._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="font-medium text-gray-900 dark:text-white">
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="font-medium text-gray-900 dark:text-white"
                      to={`/post/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell className="font-medium text-gray-900 dark:text-white">
                    {post.category.toUpperCase()}
                  </Table.Cell>
                  <Table.Cell>
                    <span className="relative group cursor-pointer">
                      <span className="font-medium text-red-500">Delete</span>
                      <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-red-400 transition-all group-hover:w-full"></span>
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="text-teal-500"
                      to={`/update-post/${post._id}`}
                    >
                      <span className="relative group">
                        <span>Edit</span>
                        <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
                      </span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      ) : (
        <p>You have no posts yet</p>
      )}
    </div>
  );
}

export default DashPost;
