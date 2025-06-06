
import { useState } from "react"

import { Plus, Edit, Trash2, Search, Eye, Calendar, User, Tag, ArrowRight, Badge } from 'lucide-react'
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/Card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/Table"

function AdminBlog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    content: "",
    excerpt: "",
    author: "",
    category: "",
    status: "Published",
    tags: "",
  })

  const initialPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      image: "/placeholder.svg?height=600&width=1200",
      content:
        "<p>Web development is evolving rapidly with new technologies and frameworks emerging every day. In this comprehensive guide, we explore the latest trends and what developers should focus on in 2024.</p><h2>The Rise of AI in Web Development</h2><p>Artificial intelligence is transforming how websites are built and maintained. From automated testing to AI-assisted coding, developers now have powerful tools at their disposal.</p><p>Key areas where AI is making an impact:</p><ul><li>Code generation and completion</li><li>Automated testing and bug detection</li><li>User experience personalization</li><li>Performance optimization</li></ul><h2>The Continued Growth of JAMstack</h2><p>JAMstack architecture continues to gain popularity for its performance, security, and developer experience benefits. More companies are moving away from traditional CMS platforms to embrace this modern approach.</p>",
      excerpt: "Exploring the latest trends in web development for 2024",
      author: "John Smith",
      category: "Technology",
      status: "Published",
      date: "2024-03-15",
      views: 1250,
      tags: "web development, javascript, trends, AI",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Building Sustainable Business Practices",
      image: "/placeholder.svg?height=600&width=1200",
      content:
        "<p>Sustainability is no longer optional for businesses. Companies that embrace sustainable practices are seeing improved customer loyalty and long-term profitability.</p><h2>The Business Case for Sustainability</h2><p>Beyond environmental benefits, sustainable practices can significantly impact your bottom line. Studies show that companies with strong ESG (Environmental, Social, and Governance) commitments outperform their peers financially over time.</p><h2>Practical Steps to Implement Sustainability</h2><p>Starting your sustainability journey doesn't have to be overwhelming. Here are some practical steps any business can take:</p><ol><li>Conduct a sustainability audit</li><li>Set measurable goals</li><li>Engage employees in the process</li><li>Communicate your efforts to stakeholders</li><li>Continuously improve and adapt</li></ol>",
      excerpt: "How sustainable practices drive business success",
      author: "Sarah Johnson",
      category: "Business",
      status: "Published",
      date: "2024-03-10",
      views: 890,
      tags: "sustainability, business strategy, ESG",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Digital Marketing Strategies for 2024",
      image: "/placeholder.svg?height=600&width=1200",
      content:
        "<p>Digital marketing continues to evolve with AI and automation playing bigger roles. Learn about the strategies that will dominate in 2024.</p><h2>The End of Third-Party Cookies</h2><p>With major browsers phasing out third-party cookies, marketers need to adapt their strategies for tracking and targeting users. First-party data collection and contextual advertising are becoming more important than ever.</p><h2>Video Content Dominance</h2><p>Video continues to be the most engaging content format across platforms. Short-form videos, live streaming, and interactive video experiences are seeing particularly high engagement rates.</p><h2>AI-Powered Personalization</h2><p>Artificial intelligence is enabling unprecedented levels of content and experience personalization. From dynamic website content to highly targeted email campaigns, AI is helping marketers deliver the right message to the right person at the right time.</p>",
      excerpt: "Essential digital marketing strategies for the modern era",
      author: "Mike Davis",
      category: "Marketing",
      status: "Draft",
      date: "2024-03-12",
      views: 0,
      tags: "digital marketing, AI, social media, SEO",
      readTime: "7 min read",
    },
  ]

  const [posts, setPosts] = useState(initialPosts)
  const [viewMode, setViewMode] = useState("list") // list, grid, preview

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const postData = {
      ...formData,
      date: new Date().toISOString().split("T")[0],
      views: 0,
      readTime: `${Math.max(Math.ceil(formData.content.length / 1000), 1)} min read`,
    }

    if (editingPost) {
      setPosts(
        posts.map((post) =>
          post.id === editingPost.id ? { ...postData, id: editingPost.id, views: editingPost.views } : post,
        ),
      )
      setEditingPost(null)
    } else {
      setPosts([...posts, { ...postData, id: Date.now() }])
    }
    setFormData({
      title: "",
      image: "",
      content: "",
      excerpt: "",
      author: "",
      category: "",
      status: "Published",
      tags: "",
    })
    setShowForm(false)
  }

  const handleEdit = (post) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      image: post.image,
      content: post.content,
      excerpt: post.excerpt,
      author: post.author,
      category: post.category,
      status: post.status,
      tags: post.tags,
    })
    setShowForm(true)
    setSelectedPost(null)
  }

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
    if (selectedPost && selectedPost.id === id) {
      setSelectedPost(null)
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      image: "",
      content: "",
      excerpt: "",
      author: "",
      category: "",
      status: "Published",
      tags: "",
    })
    setEditingPost(null)
    setShowForm(false)
  }

  const handlePreview = (post) => {
    setSelectedPost(post)
    setViewMode("preview")
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <div className="flex gap-2">
          <Button onClick={() => setShowForm(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Post
          </Button>
          <div className="border rounded-md flex">
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-r-none"
            >
              List
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-none"
            >
              Grid
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search posts..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{editingPost ? "Edit Post" : "Add New Post"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <Input
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter post title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Author</label>
                  <Input
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Enter author name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <Input
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., Technology, Business"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Featured Image URL</label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="Enter image URL"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
                <Input
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="e.g., web development, javascript, marketing"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Excerpt</label>
                <Input
                  required
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief description of the post"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content (HTML supported)</label>
                <textarea
                  required
                  className="w-full p-2 border rounded-md font-mono text-sm"
                  rows="10"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Enter post content with HTML formatting"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button type="submit">{editingPost ? "Update Post" : "Add Post"}</Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {viewMode === "preview" && selectedPost ? (
        <div className="mb-6">
          <Button variant="outline" onClick={() => setViewMode("list")} className="mb-4">
            Back to Posts
          </Button>
          <Card>
            <CardContent className="p-0">
              <div className="blog-preview">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={selectedPost.image || "/placeholder.svg"}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{selectedPost.category}</Badge>
                    {selectedPost.tags.split(",").map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag.trim()}
                      </Badge>
                    ))}
                  </div>
                  <h1 className="text-3xl font-bold mb-4">{selectedPost.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {selectedPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {selectedPost.date}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {selectedPost.views} views
                    </div>
                    <div>{selectedPost.readTime}</div>
                  </div>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <Badge variant={post.status === "Published" ? "default" : "secondary"}>{post.status}</Badge>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {post.views}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
                <div className="text-xs text-gray-500 mb-4">
                  By {post.author} • {post.date}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handlePreview(post)}>
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleEdit(post)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-500" onClick={() => handleDelete(post.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>Manage your blog posts</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell>
                        <Badge variant={post.status === "Published" ? "default" : "secondary"}>
                          {post.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{post.views}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost" onClick={() => handlePreview(post)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => handleEdit(post)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-500" onClick={() => handleDelete(post.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4">
                      No blog posts found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {filteredPosts.length === 0 && viewMode !== "preview" && (
        <div className="text-center py-12">
          <p className="text-gray-500">No blog posts found</p>
        </div>
      )}

      {/* Website Blog Preview */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Website Blog Preview</CardTitle>
          <CardDescription>How your blog appears on the website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-white p-6 border-b">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Blog</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Stay updated with the latest insights, trends, and news from our team of experts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts
                .filter((post) => post.status === "Published")
                .slice(0, 3)
                .map((post) => (
                  <div key={post.id} className="border rounded-lg overflow-hidden">
                    <div className="aspect-[16/9] bg-gray-100">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <Badge variant="outline" className="mb-2">
                        {post.category}
                      </Badge>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="link" className="p-0 h-auto mt-2">
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline">View All Posts</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminBlog
