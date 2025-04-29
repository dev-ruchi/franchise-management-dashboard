"use client"

import { useState } from 'react';
import Head from 'next/head';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Dashboard() {
  const [selectedTab] = useState('home');
  
  const menuItems = [
    { id: 'home', label: 'Home', active: true },
    { id: 'stages', label: 'Stages & Checklist' },
    { id: 'upload', label: 'Upload Docs' },
    { id: 'vendors', label: 'Preferred Vendors' },
    { id: 'tech', label: 'Tech Stack' },
    { id: 'targets', label: 'Targets' },
    { id: 'salesTargets', label: 'Zee Sales Targets' },
    { id: 'settings', label: 'MAI Settings' },
    { id: 'questions', label: 'Pending Questions', badge: 2 },
  ];



  return (
    <div className="flex h-screen bg-gray-50">
      <Head>
        <title>Franchise Management Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}
      <div className="w-56 bg-[#083F52] text-white">
        <div className={`p-4 ${selectedTab === 'home' ? 'bg-[#083F52]' : ''} border-l-4 border-blue-400`}>
          <span className="font-medium">Home</span>
        </div>
        
        {menuItems.slice(1).map(item => (
          <div key={item.id} className="p-4 flex justify-between items-center hover:bg-teal-800">
            <span className="text-gray-300">{item.label}</span>
            {item.badge && (
              <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {item.badge}
              </span>
            )}
          </div>
        ))}
        
        <div className="absolute bottom-4 left-4">
          <button className="text-gray-300 hover:text-white">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 overflow-auto">
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Account Progress */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg text-gray-900 font-medium mb-8 text-center">Account Progress</h2>
            
            <div className="w-40 h-40 mx-auto mb-8 relative">
          
              <div className="w-40 h-40 mx-auto">
              <CircularProgressbar 
                value={85} 
                text={`${85}%`}
                styles={buildStyles({
                  textSize: '16px',
                  pathColor: '#0ea5e9',
                  textColor: '#000',
                  trailColor: '#f3f4f6',
                })}
              />
           

              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-2">
              <h3 className="font-medium mb-4 text-gray-900">Steps Completed</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-gray-500">Profile Setup</span>
                  <div className="ml-auto w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L5.5 10.5L2 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-gray-500">Initial Training</span>
                  <div className="ml-auto w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L5.5 10.5L2 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-gray-500">Legal Documents</span>
                  <div className="ml-auto w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L5.5 10.5L2 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-medium mb-4 text-gray-900">Steps Remaining</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-gray-500">Financial Integration</span>
                  <div className="ml-auto w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L5.5 10.5L2 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-gray-500">Final Review</span>
                  <div className="ml-auto w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L5.5 10.5L2 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Franchisees Onboard */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4 text-gray-900">Total Franchisees Onboard</h2>
            
            <div className="flex items-end mb-8">
              <span className="text-5xl font-bold text-gray-900">14</span>
              <div className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full inline-flex items-center">
                <svg className="w-3 h-3 mr-1" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2.5V9.5M6 2.5L3 5.5M6 2.5L9 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                7.4%
              </div>
              
              <div className="ml-auto flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-pink-200 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-blue-200 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-green-200 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-200 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-purple-200 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">
                  +7
                </div>
              </div>
            </div>
            
            <div className="space-y-2 mb-8">
              <div className="w-full h-2 bg-teal-600 rounded"></div>
              <div className="w-3/5 h-2 bg-blue-400 rounded"></div>
              <div className="w-4/5 h-2 bg-blue-200 rounded"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-teal-600 mr-2"></div>
                  <span className="text-gray-500">Stage 1 (Initial Inquiry)</span>
                </div>
                <span className="font-medium text-xl text-gray-900">02</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                  <span className="text-gray-500">Stage 2 (Document Submission)</span>
                </div>
                <span className="font-medium text-xl text-gray-900">07</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-200 mr-2"></div>
                  <span className="text-gray-500">Stage 3 (Training)</span>
                </div>
                <span className="font-medium text-xl text-gray-900">05</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-lg font-medium mb-4 text-gray-900">Financial Wellbeing</h2>
              <div className="flex items-end mb-4">
                <span className="text-5xl font-bold text-gray-900">20</span>
                <div className="ml-2 flex flex-col">
                  <span className="text-xs text-gray-500">Total Franchisees</span>
                  <div className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full inline-flex items-center">
                    <svg className="w-3 h-3 mr-1" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 2.5V9.5M6 2.5L3 5.5M6 2.5L9 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    2.1%
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded">
                  <div className="text-gray-500 mb-2">Target</div>
                  <div className="font-bold text-xl text-gray-900">$500,000</div>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="text-gray-500 mb-2">Current</div>
                  <div className="font-bold text-xl text-gray-900">$450,000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insights & Feedback */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4 text-gray-900">Key Insights & Feedback</h2>
            
            <div className="flex items-center mb-2">
              <span className="text-5xl font-bold text-gray-900">10%</span>
              <div className="ml-auto">
                <div className="p-2 bg-gray-100 rounded-full">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2"/>
                    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="9" cy="9" r="1" fill="black"/>
                    <circle cx="15" cy="9" r="1" fill="black"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-gray-500 mb-6">Sales Growth</div>
            
            <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-md inline-block mb-6">
              Top Performer
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium mb-2 text-gray-900">Feedback</h3>
              <div className="flex">
                <div className="w-2 h-2 rounded-full bg-gray-300 mt-2 mr-2"></div>
                <p className="text-gray-700">Franchisees are requesting more detailed training materials.</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4 text-gray-900">Prospect Leads</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                    <span className="font-medium text-gray-900">Wade Warren</span>
                  </div>
                  <span className="text-sm text-gray-500">Stage: Initial Inquiry</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                    <span className="font-medium text-gray-900">Ava Wright</span>
                  </div>
                  <span className="text-sm text-gray-500">Stage: Initial Inquiry</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                    <span className="font-medium text-gray-900">Cody Fisher</span>
                  </div>
                  <span className="text-sm text-gray-500">Stage: Initial Inquiry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pending Questions Section */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-medium text-gray-900">Pending Questions</h2>
            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              2
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-start mb-6">
              <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Phoenix Baker</span>
                  <span className="text-xs text-gray-500">5min ago</span>
                </div>
                <div className="text-xs text-gray-500 mb-1">Syscorp</div>
                <p className="text-sm text-gray-500">What are the requirements for opening a new store?</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Koray Okumus</span>
                  <span className="text-xs text-gray-500">4hr ago</span>
                </div>
                <div className="text-xs text-gray-500 mb-1">Bestify</div>
                <p className="text-sm text-gray-500">How do I manage inventory effectively?</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Chat Assistant */}
        <div className="bg-white rounded-lg shadow p-6 relative">
          <div className="h-16 w-16 mx-auto mb-2">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="24" fill="#E5E7EB"/>
              <path d="M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z" stroke="#0EA5E9" strokeWidth="2"/>
              <path d="M30 24C30 27.3137 27.3137 30 24 30C20.6863 30 18 27.3137 18 24C18 20.6863 20.6863 18 24 18C27.3137 18 30 20.6863 30 24Z" stroke="#0EA5E9" strokeWidth="2"/>
              <path d="M34 24H38" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 24H14" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
              <path d="M24 14V10" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
              <path d="M24 38V34" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          
          <h2 className="font-medium text-center mb-6 text-gray-900 text-4xl">Welcome to the AI Chat Assistant</h2>
          
          <div className="absolute right-4 top-4">
            <button className="text-gray-400">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12L12 4M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Ask your question here..."
              className="w-full p-3 pl-4 pr-10 border rounded-md text-gray-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        </div>
    </div>
  );
}
