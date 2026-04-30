'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DocumentUploadProps {
  label: string;
  description?: string;
  icon?: string;
  accept?: string;
  onUpload?: (file: File) => void;
  className?: string;
}

export function DocumentUpload({ 
  label, 
  description = "Support for PDF, JPG, PNG", 
  icon = "cloud_upload",
  accept = ".pdf,.jpg,.jpeg,.png",
  onUpload,
  className
}: DocumentUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      processFile(selectedFile);
    }
  };

  const processFile = (selectedFile: File) => {
    setFile(selectedFile);
    if (onUpload) onUpload(selectedFile);
    
    // Simulate upload progress
    setIsUploading(true);
    setTimeout(() => setIsUploading(false), 1500);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const onDragLeave = () => {
    setIsDragActive(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      processFile(droppedFile);
    }
  };

  return (
    <div 
      className={cn(
        "group relative p-6 rounded-[32px] border-2 border-dashed transition-all duration-500 overflow-hidden",
        file ? "border-emerald-500 bg-emerald-50/50" : 
        isDragActive ? "border-[#0052CC] bg-blue-950/30 scale-[1.02]" : 
        "border-zinc-800 bg-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-800/50",
        className
      )}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <input 
        type="file" 
        ref={fileInputRef}
        className="hidden" 
        accept={accept}
        onChange={handleFileChange}
      />

      <div className="flex flex-col items-center text-center">
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500",
          file ? "bg-emerald-500 text-white scale-110 rotate-3 shadow-lg shadow-emerald-200" : 
          isDragActive ? "bg-[#0052CC] text-white animate-bounce" : 
          "bg-zinc-900 text-zinc-400 group-hover:scale-110 shadow-sm"
        )}>
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: file ? "'FILL' 1" : undefined }}>
            {file ? 'check_circle' : isUploading ? 'sync' : icon}
          </span>
        </div>

        <div className="space-y-1">
          <h4 className={cn(
            "text-xs font-black uppercase tracking-[0.1em] font-label transition-colors",
            file ? "text-emerald-700" : "text-zinc-100"
          )}>
            {file ? file.name : label}
          </h4>
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest opacity-80">
            {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : description}
          </p>
        </div>

        <div className="mt-4">
          <button 
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={cn(
              "px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all",
              file ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" : 
              "bg-zinc-900 text-white hover:bg-zinc-800 hover:scale-105 active:scale-95"
            )}
          >
            {file ? "Change Document" : "Browse Files"}
          </button>
        </div>
      </div>

      {/* Decorative pulse for drag active */}
      <AnimatePresence>
        {isDragActive && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 border-4 border-[#0052CC] rounded-[32px] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Uploading shimmer overlay */}
      {isUploading && (
        <div className="absolute inset-0 bg-zinc-900/60 flex items-center justify-center backdrop-blur-[1px]">
          <div className="w-1/2 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="w-full h-full bg-[#0052CC]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
