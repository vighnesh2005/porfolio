"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Trophy, Code2, Star, GitCommit, Users, BookOpen } from 'lucide-react'
import Image from 'next/image'

const CodingStats = () => {
    const [githubData, setGithubData] = useState(null)
    const [contributionData, setContributionData] = useState(null)
    const [leetcodeData, setLeetcodeData] = useState(null)
    const [leetcodeRating, setLeetcodeRating] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch GitHub Data
                const ghRes = await fetch('https://api.github.com/users/vighnesh2005')
                const ghData = await ghRes.json()
                setGithubData(ghData)

                // Fetch GitHub Contributions
                const contribRes = await fetch('https://github-contributions-api.jogruber.de/v4/vighnesh2005?y=last')
                const contribData = await contribRes.json()
                setContributionData(contribData)

                // Fetch LeetCode Data (Solved Problems)
                const lcRes = await fetch('https://leetcode-stats-api.herokuapp.com/vighnesh-prasad_')
                const lcData = await lcRes.json()
                setLeetcodeData(lcData)

                // Fetch LeetCode Rating History
                const lcRatingRes = await fetch('https://alfa-leetcode-api.onrender.com/userContestRankingInfo/vighnesh-prasad_')
                const lcRatingData = await lcRatingRes.json()
                setLeetcodeRating(lcRatingData)

            } catch (error) {
                console.error("Error fetching coding stats:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-[#0B1026] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-[#F5D04C]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-[#4B6CB7]/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[#F5D04C] text-sm sm:text-base font-cinzel tracking-[0.3em] uppercase font-bold mb-3">
                        Continuous Improvement
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-cinzel text-[#F2E8C9]">
                        Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D04C] to-[#e0c055]">Statistics</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* GitHub Card */}
                    <GitHubCard data={githubData} contributionData={contributionData} loading={loading} />

                    {/* LeetCode Card */}
                    <LeetCodeCard data={leetcodeData} rating={leetcodeRating} loading={loading} />
                </div>
            </div>
        </section>
    )
}

const GitHubCard = ({ data, contributionData, loading }) => {
    if (loading) return <SkeletonCard />

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group h-full"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5D04C]/10 to-transparent rounded-xl blur-sm group-hover:blur-md transition-all duration-500" />
            <div className="relative h-full bg-[#0F1629]/80 backdrop-blur-sm border border-[#F5D04C]/20 rounded-xl p-6 md:p-8 overflow-hidden hover:border-[#F5D04C]/40 transition-colors duration-300 flex flex-col">

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Github className="w-8 h-8 text-[#F5D04C]" />
                        <h3 className="text-2xl font-cinzel text-[#F2E8C9]">GitHub</h3>
                    </div>
                    <a
                        href="https://github.com/vighnesh2005"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#F5D04C]/10 rounded-full hover:bg-[#F5D04C]/20 text-[#F5D04C] transition-colors"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                        <div className="absolute inset-0 border-2 border-[#F5D04C]/30 rounded-full animate-spin-slow" />
                        <Image
                            src={data?.avatar_url || "/placeholder.png"}
                            alt="Profile"
                            fill
                            className="rounded-full object-cover p-1"
                        />
                    </div>

                    <div className="flex-1 w-full grid grid-cols-2 gap-4">
                        <StatItem icon={BookOpen} label="Repositories" value={data?.public_repos} />
                        <StatItem icon={Users} label="Followers" value={data?.followers} />
                        <StatItem icon={Users} label="Following" value={data?.following} />
                        <StatItem icon={GitCommit} label="Total Commits" value={contributionData?.total?.lastYear} />
                    </div>
                </div>

                {/* Contribution Graph */}
                <div className="mt-auto">
                    <h4 className="text-[#F2E8C9] text-sm font-bold mb-3">Contribution Graph</h4>
                    <ContributionGraph data={contributionData?.contributions} />
                </div>

                <div className="mt-6 pt-6 border-t border-[#F5D04C]/10">
                    <p className="text-[#F2E8C9]/70 text-sm font-light italic text-center md:text-left">
                        "{data?.bio || "Building things for the web."}"
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

const ContributionGraph = ({ data }) => {
    if (!data) return null;

    // GitHub colors (Dark mode)
    const getLevelColor = (level) => {
        switch (level) {
            case 0: return 'bg-[#161b22]';
            case 1: return 'bg-[#0e4429]';
            case 2: return 'bg-[#006d32]';
            case 3: return 'bg-[#26a641]';
            case 4: return 'bg-[#39d353]';
            default: return 'bg-[#161b22]';
        }
    };

    return (
        <div className="w-full overflow-x-auto pb-2">
            <div className="min-w-[600px] flex flex-col gap-1">
                {/* We need to map days to a grid. 
                    The API returns a flat array of days. 
                    We want columns of weeks.
                    CSS Grid: grid-rows-7 grid-flow-col
                */}
                <div className="grid grid-rows-7 grid-flow-col gap-[3px]">
                    {data.map((day, i) => (
                        <div
                            key={i}
                            className={`w-[10px] h-[10px] rounded-sm ${getLevelColor(day.level)}`}
                            title={`${day.date}: ${day.count} contributions`}
                        />
                    ))}
                </div>
                <div className="flex items-center justify-end gap-2 mt-2 text-[10px] text-[#F2E8C9]/60">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-[10px] h-[10px] rounded-sm bg-[#161b22]" />
                        <div className="w-[10px] h-[10px] rounded-sm bg-[#0e4429]" />
                        <div className="w-[10px] h-[10px] rounded-sm bg-[#006d32]" />
                        <div className="w-[10px] h-[10px] rounded-sm bg-[#26a641]" />
                        <div className="w-[10px] h-[10px] rounded-sm bg-[#39d353]" />
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    )
}

const LeetCodeCard = ({ data, rating, loading }) => {
    if (loading) return <SkeletonCard />

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-bl from-[#F5D04C]/10 to-transparent rounded-xl blur-sm group-hover:blur-md transition-all duration-500" />
            <div className="relative h-full bg-[#0F1629]/80 backdrop-blur-sm border border-[#F5D04C]/20 rounded-xl p-6 md:p-8 overflow-hidden hover:border-[#F5D04C]/40 transition-colors duration-300">

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Code2 className="w-8 h-8 text-[#F5D04C]" />
                        <h3 className="text-2xl font-cinzel text-[#F2E8C9]">LeetCode</h3>
                    </div>
                    <a
                        href="https://leetcode.com/vighnesh-prasad_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#F5D04C]/10 rounded-full hover:bg-[#F5D04C]/20 text-[#F5D04C] transition-colors"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-3 bg-[#F5D04C]/5 rounded-lg border border-[#F5D04C]/10">
                        <div className="text-[#00b8a3] font-bold text-xl">{data?.easySolved}</div>
                        <div className="text-xs text-[#F2E8C9]/60 uppercase tracking-wider mt-1">Easy</div>
                    </div>
                    <div className="text-center p-3 bg-[#F5D04C]/5 rounded-lg border border-[#F5D04C]/10">
                        <div className="text-[#ffc01e] font-bold text-xl">{data?.mediumSolved}</div>
                        <div className="text-xs text-[#F2E8C9]/60 uppercase tracking-wider mt-1">Medium</div>
                    </div>
                    <div className="text-center p-3 bg-[#F5D04C]/5 rounded-lg border border-[#F5D04C]/10">
                        <div className="text-[#ff375f] font-bold text-xl">{data?.hardSolved}</div>
                        <div className="text-xs text-[#F2E8C9]/60 uppercase tracking-wider mt-1">Hard</div>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div>
                        <div className="text-[#F2E8C9] text-sm">Total Solved</div>
                        <div className="text-2xl font-bold text-[#F5D04C]">{data?.totalSolved}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-[#F2E8C9] text-sm">Contest Rating</div>
                        <div className="text-2xl font-bold text-[#F5D04C]">
                            {rating?.userContestRanking?.rating ? Math.round(rating.userContestRanking.rating) : "N/A"}
                        </div>
                    </div>
                </div>

                {/* Rating Graph */}
                <div className="h-32 w-full mt-4 bg-[#0B1026]/50 rounded-lg p-2 relative overflow-hidden">
                    <RatingGraph history={rating?.userContestRankingHistory} />
                </div>

            </div>
        </motion.div>
    )
}

const RatingGraph = ({ history }) => {
    if (!history || history.length === 0) return null;

    // Filter only attended contests to make the graph meaningful
    const attended = history.filter(h => h.attended);
    if (attended.length < 2) return (
        <div className="flex items-center justify-center h-full text-[#F2E8C9]/40 text-xs">
            Not enough data for graph
        </div>
    );

    const ratings = attended.map(h => h.rating);
    const minRating = Math.min(...ratings);
    const maxRating = Math.max(...ratings);
    const range = maxRating - minRating;

    // Normalize points for SVG (0-100 width, 0-100 height)
    // Invert Y because SVG 0 is top
    const points = attended.map((h, i) => {
        const x = (i / (attended.length - 1)) * 100;
        const y = 100 - ((h.rating - minRating) / range) * 80 - 10; // 10% padding top/bottom
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="w-full h-full relative">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#F5D04C" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#F5D04C" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {/* Area under curve */}
                <motion.path
                    d={`M0,100 ${points.split(' ').map(p => 'L' + p).join(' ')} L100,100 Z`}
                    fill="url(#gradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                {/* Line */}
                <motion.polyline
                    fill="none"
                    stroke="#F5D04C"
                    strokeWidth="2"
                    points={points}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </svg>
            {/* Tooltip-like indicator for max rating */}
            <div className="absolute top-2 right-2 text-[10px] text-[#F5D04C]/60 bg-[#0B1026]/80 px-1 rounded">
                Max: {Math.round(maxRating)}
            </div>
        </div>
    )
}

const StatItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-3">
        <div className="p-2 bg-[#F5D04C]/10 rounded-lg">
            <Icon className="w-4 h-4 text-[#F5D04C]" />
        </div>
        <div>
            <div className="text-[#F2E8C9] font-bold">{value || 0}</div>
            <div className="text-xs text-[#F2E8C9]/60">{label}</div>
        </div>
    </div>
)

const SkeletonCard = () => (
    <div className="h-[300px] bg-[#0F1629]/80 border border-[#F5D04C]/10 rounded-xl p-8 animate-pulse">
        <div className="flex justify-between mb-8">
            <div className="w-32 h-8 bg-[#F5D04C]/10 rounded" />
            <div className="w-8 h-8 bg-[#F5D04C]/10 rounded-full" />
        </div>
        <div className="flex gap-8">
            <div className="w-24 h-24 bg-[#F5D04C]/5 rounded-full" />
            <div className="flex-1 space-y-4">
                <div className="w-full h-4 bg-[#F5D04C]/5 rounded" />
                <div className="w-2/3 h-4 bg-[#F5D04C]/5 rounded" />
            </div>
        </div>
    </div>
)

export default CodingStats
