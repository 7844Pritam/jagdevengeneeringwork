"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Search, Badge } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import { Button } from "../components/Button"
import { Input } from "../components/Input"

function AdminBrands() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [editingBrand, setEditingBrand] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
    website: "",
    status: "Active"
  })

  const initialBrands = [
    {
      id: 1,
      name: "Tech Solutions Inc",
      image: "/placeholder.svg?height=200&width=300",
      description: "Leading technology solutions provider specializing in cloud computing and AI services.",
      category: "Technology",
      website: "https://techsolutions.com",
      status: "Active"
    },
    {
      id: 2,
      name: "Green Earth Foods",
      image: "/placeholder.svg?height=200&width=300",
      description: "Organic food company committed to sustainable farming and healthy living.",
      category: "Food & Beverage",
      website: "https://greenearthfoods.com",
      status: "Active"
    },
    {
      id: 3,
      name: "Urban Fashion Co",
      image: "/placeholder.svg?height=200&width=300",
      description: "Contemporary fashion brand focusing on urban streetwear and sustainable materials.",
      category: "Fashion",
      website: "https://urbanfashion.com",
      status: "Inactive"
    }
  ]

  const [brands, setBrands] = useState(initialBrands)

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingBrand) {
      setBrands(brands.map(brand => 
        brand.id === editingBrand.id 
          ? { ...formData, id: editingBrand.id }
          : brand
      ))
      setEditingBrand(null)
    } else {
      setBrands([...brands, { ...formData, id: Date.now() }])
    }
    setFormData({ name: "", image: "", description: "", category: "", website: "", status: "Active" })
    setShowForm(false)
  }

  const handleEdit = (brand) => {
    setEditingBrand(brand)
    setFormData(brand)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    setBrands(brands.filter(brand => brand.id !== id))
  }

  const resetForm = () => {
    setFormData({ name: "", image: "", description: "", category: "", website: "", status: "Active" })
    setEditingBrand(null)
    setShowForm(false)
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Brands & Businesses</h1>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Brand
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search brands..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{editingBrand ? "Edit Brand" : "Add New Brand"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Brand Name</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter brand name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <Input
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    placeholder="e.g., Technology, Fashion, Food"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Image URL</label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="Enter image URL"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Website</label>
                  <Input
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    placeholder="https://example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  required
                  className="w-full p-2 border rounded-md"
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Enter brand description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button type="submit">
                  {editingBrand ? "Update Brand" : "Add Brand"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBrands.map((brand) => (
          <Card key={brand.id} className="overflow-hidden">
            <div className="aspect-video bg-gray-100">
              <img
                src={brand.image || "/placeholder.svg"}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{brand.name}</CardTitle>
                <Badge variant={brand.status === "Active" ? "default" : "secondary"}>
                  {brand.status}
                </Badge>
              </div>
              <Badge variant="outline" className="w-fit">
                {brand.category}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{brand.description}</p>
              {brand.website && (
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm hover:underline block mb-4"
                >
                  Visit Website
                </a>
              )}
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(brand)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-red-500"
                  onClick={() => handleDelete(brand.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBrands.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No brands found</p>
        </div>
      )}
    </div>
  )
}

export default AdminBrands
